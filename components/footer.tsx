export function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <div className="relative z-10 mt-12 flex flex-col items-center justify-center border-t border-brand-black/5 dark:border-brand-cream/5 py-10">
        <div className="flex flex-row items-center text-center text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          © {getYear()} by{" "}
          <a
            href="https://www.zzhwhd.com"
            target="_blank"
            className="ml-1 text-brand-black dark:text-brand-cream transition-all hover:text-brand-yellow"
          >
            Garlic Garlic
          </a>
          <div className="mx-4 h-3 border-r border-brand-black/20 dark:border-brand-cream/20"></div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-brand-yellow"
          >
            粤ICP备2025365049号
          </a>
        </div>
      </div>
    </footer>
  );
}