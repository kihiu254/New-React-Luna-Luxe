import { GitHubAuth } from "@/components/github-auth"

export function AuthSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-space-grotesk mb-4">Explore My GitHub</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with GitHub to view my latest repositories, contributions, and get enhanced access to project
            details
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <GitHubAuth />
        </div>
      </div>
    </section>
  )
}
