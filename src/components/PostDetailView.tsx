import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, Eye, Share2, Copy, Check, Bookmark, Award } from 'lucide-react';
import { Post } from '../types';

interface PostDetailViewProps {
  post: Post;
  onBack: () => void;
  onSelectTag: (tag: string) => void;
}

export const PostDetailView: React.FC<PostDetailViewProps> = ({
  post,
  onBack,
  onSelectTag,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 3000);
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeBuffer: string[] = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // close code block
          const codeText = codeBuffer.join('\n');
          elements.push(
            <div key={`code-${idx}`} className="relative my-5 rounded-xl border-2 border-slate-900 bg-slate-950 shadow-[3px_3px_0px_0px_#18181b] overflow-hidden text-slate-100">
              <div className="flex items-center justify-between px-4 py-2 border-b-2 border-slate-800 bg-slate-900 text-[11px] font-mono text-amber-200">
                <span className="font-bold">★ VERIFIED CODE ARTIFACT</span>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(codeText);
                    setCopiedCode(true);
                    setTimeout(() => setCopiedCode(false), 2000);
                  }}
                  className="flex items-center gap-1 rounded bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-slate-950 hover:bg-amber-300 transition"
                >
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-slate-950" /> : <Copy className="h-3.5 w-3.5 text-slate-950" />}
                  <span>{copiedCode ? 'COPIED!' : 'COPY CODE'}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono overflow-x-auto text-amber-50">
                <code>{codeText}</code>
              </pre>
            </div>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeBuffer = [];
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="mt-6 mb-2 font-serif-academic text-xl font-bold text-[#A51C30] dark:text-rose-400">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="mt-8 mb-3 font-comic text-2xl tracking-wide text-slate-950 dark:text-amber-100">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="ml-5 list-disc text-xs sm:text-sm text-slate-800 dark:text-slate-200 my-1 font-medium leading-relaxed">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={idx} className="my-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <article className="space-y-6">
      {/* Back Button & Top Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="comic-btn inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-1.5 text-xs font-black text-slate-900 hover:bg-amber-100 dark:bg-slate-800 dark:text-amber-100"
        >
          <ArrowLeft className="h-4 w-4 text-[#A51C30]" />
          <span>RETURN TO CHRONICLES</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="comic-btn inline-flex items-center gap-1.5 rounded-xl bg-amber-300 px-3.5 py-1.5 text-xs font-black text-slate-950 hover:bg-amber-400"
          >
            {copiedShare ? <Check className="h-3.5 w-3.5 text-[#A51C30]" /> : <Share2 className="h-3.5 w-3.5 text-[#A51C30]" />}
            <span>{copiedShare ? 'LINK COPIED!' : 'SHARE DISPATCH'}</span>
          </button>
        </div>
      </div>

      {/* Main Post Container (Comic Box Frame) */}
      <div className="comic-box rounded-3xl bg-white p-6 sm:p-10 dark:bg-[#161720]">
        {/* Meta Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <span className="rounded-md border border-slate-900 bg-[#A51C30] px-2.5 py-1 text-amber-200 uppercase tracking-wider text-[11px] font-black shadow-[1.5px_1.5px_0px_0px_#000]">
            {post.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-[#A51C30]" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-[#A51C30]" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#A51C30] font-bold">
            <Eye className="h-3.5 w-3.5" />
            {post.views} views
          </span>
        </div>

        {/* Title in Collegiate Serif */}
        <h1 className="mt-4 font-serif-academic text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-amber-50 leading-tight">
          {post.title}
        </h1>

        {/* Excerpt with Comic Callout Banner */}
        <div className="my-4 rounded-xl border-2 border-slate-900 bg-amber-50/80 p-4 shadow-[2px_2px_0px_0px_#18181b] dark:bg-slate-800/80">
          <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-amber-100 leading-relaxed italic border-l-4 border-[#A51C30] pl-3">
            {post.excerpt}
          </p>
        </div>

        {/* Cover Image with Comic Frame */}
        {post.coverImage && (
          <div className="my-6 overflow-hidden rounded-2xl border-2 border-slate-900 shadow-[3px_3px_0px_0px_#18181b] aspect-16/9 bg-slate-900">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="mt-6 border-t-2 border-slate-900 pt-6 dark:border-slate-700">
          {renderContent(post.content)}
        </div>

        {/* Tags with Comic Inked Badges */}
        <div className="mt-8 border-t-2 border-slate-900 pt-6 dark:border-slate-700">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-comic text-sm tracking-wider text-slate-950 dark:text-amber-200">
              DISCIPLINE TAGS:
            </span>
            {post.tags.map((t) => (
              <button
                key={t}
                onClick={() => onSelectTag(t)}
                className="rounded-lg border-[1.5px] border-slate-900 bg-amber-100 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-[1.5px_1.5px_0px_0px_#000] hover:bg-[#A51C30] hover:text-white transition"
              >
                #{t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
