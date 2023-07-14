
export default async function IndexPage() {

  async function getGithubStars(): Promise<number | null> {
    try {
      const response = await fetch(
        "https://api.github.com/repos/sadmann7/skateshop",
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
          next: {
            revalidate: 60,
          },
        }
      )

      if (!response.ok) {
        return null
      }

      const data = (await response.json()) as { stargazers_count: number }

      return data.stargazers_count
    } catch (error) {
      return null
    }
  }

  // const githubStars = await getGithubStars()

  return (
    <div className="gap-12">
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-32"
      >
        Landing Page
      </section>
    </div>
  )
}
