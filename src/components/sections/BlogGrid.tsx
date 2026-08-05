import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { formatDate, type BlogPost } from "@/data/blog";

type BlogGridProps = {
  posts: BlogPost[];
  title?: string;
  basePath: "/news" | "/successstories";
  cta?: { label: string; href: string };
  theme?: "light-bold" | "white-bold";
};

export function BlogGrid({
  posts,
  title,
  basePath,
  cta,
  theme = "light-bold",
}: BlogGridProps) {
  return (
    <Section theme={theme} className="py-16 md:py-24">
      <Container>
        {title ? (
          <FadeIn className="mb-12">
            <h2>{title}</h2>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <article className="group">
                <Link href={`${basePath}/${post.slug}`} className="block">
                  <div className="media-frame relative aspect-[3/2] mb-5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                    />
                  </div>
                  <p className="font-meta text-sm mb-2 opacity-70">
                    {post.category} · {formatDate(post.date)}
                  </p>
                  <h3 className="text-2xl md:text-[2rem] mb-3 group-hover:text-brand-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="opacity-90 text-base">{post.excerpt}</p>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        {cta ? (
          <FadeIn className="mt-12">
            <Button href={cta.href} variant="secondary">
              {cta.label}
            </Button>
          </FadeIn>
        ) : null}
      </Container>
    </Section>
  );
}
