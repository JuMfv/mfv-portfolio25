import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Camera, User } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

/**
 * Project detail page with hero image, gallery, and full-screen lightbox
 * Features smooth animations and immersive image viewing experience
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 404 if project not found
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />
      
      <div className="min-h-screen">
        {/* Hero Image - 70vh */}
      <motion.div
        className="relative w-full h-[70vh] overflow-hidden bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* Project Info Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Title and Category */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              {project.title}
            </h1>
            {/* Role and tech badges */}
            <div className="flex items-center gap-4">
              {project.role && (
                <span className="text-sm text-muted-foreground font-light">{project.role}</span>
              )}
              {project.tech && project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-muted/60 text-foreground">{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 capitalize">
                <span>•</span>
                <span>{project.category}</span>
              </div>
              {project.location && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
              {project.description}
            </p>
          </div>

          {/* Structured Technical Narrative */}
          <div className="space-y-6 pt-6">
            {project.context && (
              <div>
                <h4 className="text-sm uppercase text-muted-foreground tracking-wide">Contexte</h4>
                <p className="mt-2 font-light text-foreground">{project.context}</p>
              </div>
            )}

            {project.problem && (
              <div>
                <h4 className="text-sm uppercase text-muted-foreground tracking-wide">Problème</h4>
                <p className="mt-2 font-light text-foreground">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h4 className="text-sm uppercase text-muted-foreground tracking-wide">Solution technique</h4>
                <p className="mt-2 font-light text-foreground">{project.solution}</p>
              </div>
            )}

            {project.results && project.results.length > 0 && (
              <div>
                <h4 className="text-sm uppercase text-muted-foreground tracking-wide">Résultats</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 font-light text-foreground">
                  {project.results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                {/* Metrics / quick chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.metrics && project.metrics.map((m, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{m}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Links & Architecture */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded">
                    Repo
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-foreground text-background rounded">
                    Live Demo
                  </a>
                )}
              </div>

              {project.architecture && (
                <div className="text-sm text-muted-foreground">
                  <h4 className="uppercase tracking-wide">Architecture</h4>
                  <p className="mt-1 font-light">{project.architecture}</p>
                </div>
              )}
            </div>

            {project.reproduce && (
              <div>
                <h4 className="text-sm uppercase text-muted-foreground tracking-wide">Reproduire / Run locally</h4>
                <pre className="mt-2 bg-muted p-4 rounded overflow-auto text-sm">{project.reproduce}</pre>
              </div>
            )}
          </div>

          {/* Back link */}
          <div className="pt-6">
            <a href="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:underline">
              <ArrowLeft className="size-4" />
              Back to portfolio
            </a>
          </div>

          {/* Technical Details */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {project.camera && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Camera className="size-4" />
                  <span>Camera</span>
                </div>
                <p className="font-light text-foreground">{project.camera}</p>
              </div>
            )}
            {project.client && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <User className="size-4" />
                  <span>Client</span>
                </div>
                <p className="font-light text-foreground">{project.client}</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>

        {/* Image Gallery - Edge to edge */}
        {project.images && project.images.length > 0 && (
          <section className="py-12 md:py-16">
            <div className="space-y-8 md:space-y-12">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.1}>
                  <ImageWithLightbox
                    image={image}
                    onClick={() => openLightbox(index)}
                    priority={index === 0}
                    index={index}
                    className="w-full"
                  />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Lightbox */}
        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}
