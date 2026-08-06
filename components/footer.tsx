export function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <div className="relative z-10 mt-12 flex flex-col items-center justify-center border-t border-line py-10">
        <div className="flex flex-row items-center text-center text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          © {getYear()} by{" "}
          <a
            href="https://www.zzhwhd.com"
            target="_blank"
            className="ml-1 text-foreground transition-all hover:text-accent"
          >
            Gary Frost
          </a>
          <div className="mx-4 h-3 border-r border-line"></div>
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-accent"
          >
            粤ICP备2025365049号
          </a>
        </div>
      </div>
    </footer>
  );
}
