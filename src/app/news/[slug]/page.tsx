import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import { formatDate, getNewsBySlug, newsPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/news/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  const related = newsPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Section theme="black-bold" className="pt-10 pb-8">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="font-meta text-sm mb-4 opacity-70">
              {post.category} · {formatDate(post.date)} · {post.author}
            </p>
            <h1 className="mb-8 text-[clamp(1.75rem,1rem+3.5vw,3.75rem)] leading-tight">
              {post.title}
            </h1>
          </FadeIn>
        </Container>
      </Section>

      <Section theme="light-bold" className="pb-16 md:pb-24">
        <Container className="max-w-3xl">
          <FadeIn className="media-frame relative aspect-[3/2] mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              quality={80}
            />
          </FadeIn>
          <FadeIn className="space-y-6 text-base md:text-lg leading-relaxed opacity-90">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>

          {related.length ? (
            <FadeIn className="mt-16 pt-10 border-t border-brand-black/10">
              <h3 className="text-2xl mb-6">İlgili yazılar</h3>
              <ul className="space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/news/${item.slug}`}
                      className="hover:text-brand-accent transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ) : null}
        </Container>
      </Section>
      <JoinTheRace />
    </>
  );
}
