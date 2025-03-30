import { Button } from "@/components/ui/button";

export function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button
            variant="outline"
            className="h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30"
          >
            <span className="block text-lg font-medium">
              Every donation tracked on-chain
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30"
          >
            <span className="block text-lg font-medium">
              Instant withdrawals, no delays/ middlemen
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30"
          >
            <span className="block text-lg font-medium">
              Full transparency with smart contract-powered donations
            </span>
          </Button>

          <Button
            variant="outline"
            className="h-auto border-blue-600 bg-blue-900/20 p-4 text-left hover:bg-blue-900/30"
          >
            <span className="block text-lg font-medium">Open and trusted</span>
          </Button>
        </div>

        <div className="mt-4">
          <Button
            variant="outline"
            className="h-auto w-full border-blue-600 bg-blue-900/20 p-4 text-center hover:bg-blue-900/30"
          >
            <span className="block text-lg font-medium">
              Empowering creators, charities & communities to thrive
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
