import { Navigation } from "@/components/Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <div className="container mx-auto py-8">
        <Navigation />
      </div>
    </div>
  );
};

export default Index;
