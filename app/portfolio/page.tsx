"use client";

import React, { useState, useRef } from 'react';
// Tərcümə faylınızı bura import etməlisiniz (yolunuz fərqli ola bilər)
import { translations } from '@/lib/i18n'; 
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  // Aktiv dili müəyyən etmək (Nümunə üçün 'AZ' qoyulub)
  const lang = 'AZ'; 
  // Layihələri bazadan yox, statik obyektdən çəkirik
  const portfolioItems = translations.portfolio.projects;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage);
  
  const containerRef = useRef<HTMLElement>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const paginatedItems = portfolioItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main ref={containerRef} className="container mx-auto py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            {translations.portfolio.title[lang]}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            {translations.portfolio.subtitle[lang]}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedItems.map((item, index) => (
          <Card key={index} className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow">
            {item.images && item.images.length > 1 && (
              <div 
                className="flex w-full overflow-x-auto gap-2 mt-4 pb-2 snap-x snap-mandatory 
                           [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {item.images.map((img, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="flex-none w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden snap-center cursor-pointer border border-transparent hover:border-primary transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${item.title} - detal ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2 text-base">
                {item.description[lang]}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {item.tags[lang].map((tag, tagIndex) => (
                   <span key={tagIndex} className="text-xs bg-muted px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </main>
  );
}