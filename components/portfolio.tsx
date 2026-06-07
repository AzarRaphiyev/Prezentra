"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { translations } from "@/lib/i18n";

// Komponentinizin daxilində (return-dən əvvəl) bunları əlavə edin:
const scrollRef = useRef<HTMLDivElement>(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

// Mouse ilə basıb sürüşdürmək üçün funksiyalar
const handleMouseDown = (e: React.MouseEvent) => {
  if (!scrollRef.current) return;
  setIsDragging(true);
  setStartX(e.pageX - scrollRef.current.offsetLeft);
  setScrollLeft(scrollRef.current.scrollLeft);
};

const handleMouseLeave = () => {
  setIsDragging(false);
};

const handleMouseUp = () => {
  setIsDragging(false);
};

const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDragging || !scrollRef.current) return;
  e.preventDefault();
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX) * 2; // 2 rəqəmini artıraraq sürüşdürmə sürətini artıra bilərsiniz
  scrollRef.current.scrollLeft = scrollLeft - walk;
};

// Mouse təkərliyi (wheel) ilə sağa-sola hərəkət etdirmək üçün
const handleWheel = (e: React.WheelEvent) => {
  if (scrollRef.current) {
    scrollRef.current.scrollLeft += e.deltaY;
  }
};

const relatedScrollRef = useRef<HTMLDivElement>(null);
const [isRelatedDragging, setIsRelatedDragging] = useState(false);
const [relatedStartX, setRelatedStartX] = useState(0);
const [relatedScrollLeft, setRelatedScrollLeft] = useState(0);

const handleRelatedMouseDown = (e: React.MouseEvent) => {
  if (!relatedScrollRef.current) return;
  setIsRelatedDragging(true);
  setRelatedStartX(e.pageX - relatedScrollRef.current.offsetLeft);
  setRelatedScrollLeft(relatedScrollRef.current.scrollLeft);
};

const handleRelatedMouseLeave = () => setIsRelatedDragging(false);
const handleRelatedMouseUp = () => setIsRelatedDragging(false);

const handleRelatedMouseMove = (e: React.MouseEvent) => {
  if (!isRelatedDragging || !relatedScrollRef.current) return;
  e.preventDefault();
  const x = e.pageX - relatedScrollRef.current.offsetLeft;
  const walk = (x - relatedStartX) * 2; // Sürüşdürmə sürəti
  relatedScrollRef.current.scrollLeft = relatedScrollLeft - walk;
};

const handleRelatedWheel = (e: React.WheelEvent) => {
  if (relatedScrollRef.current) {
    relatedScrollRef.current.scrollLeft += e.deltaY;
  }
};

type CategoryKey = "all" | "slides" | "websites";

export default function Portfolio() {
  const lang = useLang();
  const t = translations.portfolio;

  const categoryEntries: { key: CategoryKey; label: string }[] = [
    { key: "all", label: t.categories.all[lang] },
    { key: "slides", label: t.categories.slides[lang] },
    { key: "websites", label: t.categories.websites[lang] },
  ];

  const [filter, setFilter] = useState<CategoryKey>("all");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const projects = t.projects;

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === filter);

  const selected = selectedIdx !== null ? projects[selectedIdx] : null;

  const relatedProjects = selected
    ? projects.filter(
        (p, i) => p.categoryKey === selected.categoryKey && i !== selectedIdx
      )
    : [];

  function openProject(globalIdx: number) {
    setActiveImage(0);
    setSelectedIdx(globalIdx);
  }

  function goNext() {
    if (!selected) return;
    setActiveImage((prev) =>
      prev < selected.images.length - 1 ? prev + 1 : 0
    );
  }

  function goPrev() {
    if (!selected) return;
    setActiveImage((prev) =>
      prev > 0 ? prev - 1 : selected.images.length - 1
    );
  }

  // Get category display name
  function getCategoryLabel(key: "slides" | "websites") {
    return key === "slides" ? t.categories.slides[lang] : t.categories.websites[lang];
  }

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {t.badge[lang]}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {t.title[lang]}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {t.subtitle[lang]}
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex items-center justify-center gap-2">
          {categoryEntries.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                // Find original index in the full projects array
                const globalIdx = projects.indexOf(project);
                return (
                  <motion.div
                    key={project.title}
                    layoutId={`project-${project.title}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => openProject(globalIdx)}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_0_30px_-5px] hover:shadow-primary/15"
                    role="button"
                    tabIndex={0}
                    aria-label={`${t.viewProject[lang]}: ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openProject(globalIdx);
                      }
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={project.images[0] || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      {/* Image count badge */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                        {project.images.length}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        {getCategoryLabel(project.categoryKey)}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed  inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
                aria-label={t.close[lang]}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Gallery */}
              <div className="relative  aspect-video w-full overflow-hidden bg-secondary">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={selected.images[activeImage]}
                    alt={`${selected.title} - ${activeImage + 1}/${selected.images.length}`}
                    className="h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Navigation arrows */}
                {selected.images.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
                      aria-label={t.prevImage[lang]}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
                      aria-label={t.nextImage[lang]}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Dots indicator */}
                    <div className=" absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
                      {selected.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === activeImage
                              ? "w-6 bg-primary"
                              : "w-2 bg-foreground/40 hover:bg-foreground/60"
                          }`}
                          aria-label={`${t.imageOf[lang]} ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
             {selected.images.length > 1 && (
  <div
    ref={scrollRef}
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    onWheel={handleWheel}
    // Qeyd: "snap-x snap-mandatory" mouse ilə sürüşdürmə zamanı ilişmələr yarada bilər deyə onları sildik
    className="flex gap-2 px-8 pt-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
  >
    {selected.images.map((img, idx) => (
      <button
        key={idx}
        onClick={() => setActiveImage(idx)}
        className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
          idx === activeImage
            ? "border-primary ring-1 ring-primary/30"
            : "border-transparent opacity-60 hover:opacity-100"
        }`}
      >
        <img
          src={img || "/placeholder.svg"}
          alt={`${selected.title} thumbnail ${idx + 1}`}
          className="h-full w-full object-cover pointer-events-none" 
          // pointer-events-none -> Şəklin özünün sürüklənməsinə (native browser drag) mane olmaq üçün vacibdir
        />
      </button>
    ))}
  </div>
)}

              <div className="p-8">
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {getCategoryLabel(selected.categoryKey)}
                </span>
                <h2 className="mb-4 text-3xl font-bold text-foreground">
                  {selected.title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {selected.description[lang]}
                </p>

                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {selected.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA button */}
                <a
                  href="#contact"
                  onClick={() => setSelectedIdx(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
                >
                  {t.startProject[lang]}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h12M12 6l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Related Projects */}
               {relatedProjects.length > 0 && (
  <div className="mt-10 border-t border-border pt-8">
    <h3 className="mb-4 text-lg font-bold text-foreground">
      {t.relatedProjects[lang]}
    </h3>
    <div
      ref={relatedScrollRef}
      onMouseDown={handleRelatedMouseDown}
      onMouseLeave={handleRelatedMouseLeave}
      onMouseUp={handleRelatedMouseUp}
      onMouseMove={handleRelatedMouseMove}
      onWheel={handleRelatedWheel}
      className="flex gap-4 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
    >
      {relatedProjects.map((rp) => {
        const rpIdx = projects.indexOf(rp);
        return (
          <button
            key={rp.title}
            onClick={() => openProject(rpIdx)}
            className="group flex-shrink-0 overflow-hidden rounded-xl border border-border bg-secondary transition-shadow hover:shadow-lg"
          >
            <div className="relative h-28 w-48 overflow-hidden">
              <img
                src={rp.images[0] || "/placeholder.svg"}
                alt={rp.title}
                // Mouse ilə sürüşdürəndə şəkli kənara çəkməsin deyə pointer-events-none əlavə edildi
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
              />
            </div>
            <div className="p-3 text-left">
              {/* Mətni seçməmək üçün pointer-events-none əlavə edildi */}
              <p className="text-sm font-semibold text-foreground pointer-events-none">
                {rp.title}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  </div>
)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
