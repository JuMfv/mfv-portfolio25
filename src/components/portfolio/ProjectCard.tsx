import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  aspectRatio, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';
  
  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-sm"
      >
        {/* Image Container */}
        <div className={cn('relative overflow-hidden bg-muted', aspectRatioClasses[ratio])}>
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted" />
          )}
          
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-110'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Overlay with gradient and text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                {project.title}
              </h3>
              {showCategory && (
                <div className="flex items-center gap-3 text-sm text-white/80 font-light tracking-wide">
                  <span className="capitalize">{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              )}
                {/* Tech badges and actions */}
                {project.tech && project.tech.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/90">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex items-center gap-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm inline-flex items-center gap-2 bg-white/10 text-white/90 px-3 py-1 rounded hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Repo
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm inline-flex items-center gap-2 bg-white/10 text-white/90 px-3 py-1 rounded hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )}
                </div>
            </div>
          </div>

          {/* Subtle hover border effect */}
          <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
