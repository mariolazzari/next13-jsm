import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="text-center orange_gradient">AI Powerd Prompt</span>
      </h1>
      <p className="text-center desc">
        PrompTopia is an open source AI base prompt
      </p>

      <Feed />
    </section>
  );
}
