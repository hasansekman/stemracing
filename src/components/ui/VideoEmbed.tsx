type VideoEmbedProps = {
  title: string;
  /** YouTube video id */
  youtubeId: string;
  className?: string;
};

export function VideoEmbed({ title, youtubeId, className }: VideoEmbedProps) {
  return (
    <div
      className={
        className ??
        "media-frame relative aspect-video w-full overflow-hidden bg-brand-black"
      }
    >
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
