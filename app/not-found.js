import Link from 'next/link';
import { Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <div className="text-[120px] font-display font-extrabold text-brand-100 leading-none">404</div>
          <h1 className="font-display font-extrabold text-3xl text-ink-primary mt-4 mb-3">Page Not Found</h1>
          <p className="text-ink-muted font-body text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button href="/" size="lg">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
