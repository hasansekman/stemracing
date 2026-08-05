import { notFound } from "next/navigation";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { JoinTheRace } from "@/components/sections/JoinTheRace";
import {
  formatDate,
  getSuccessBySlug,
  successStories,
} from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return successStories.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getSuccessBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/successstories/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function SuccessStoryPage({ params }: Props) {
  const { slug } = await params;
  const post = getSuccessBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Section theme="bright" className="pt-10 pb-8">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="font-meta text-sm mb-4 opacity-80">
              {post.category} · {formatDate(post.date)}
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
        </Container>
      </Section>
      <JoinTheRace />
    </>
  );
}
