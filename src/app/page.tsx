import QuizFlow from '@/components/quiz/QuizFlow';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-background p-4 text-foreground">
      <QuizFlow />
    </div>
  );
}
