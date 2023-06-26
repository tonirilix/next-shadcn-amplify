export async function getGitHubStars(): Promise<any> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/tonirilix/shadcn-next-test",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: {
          revalidate: 60,
        },
      }
    )

    const responseProfile = await fetch("/api/profile", {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60,
      },
    })

    if (!response?.ok || !responseProfile.ok) {
      return null
    }

    const github = await response.json()
    const profile = await responseProfile.json()

    return {
      github,
      profile,
    }
  } catch (error) {
    return null
  }
}
