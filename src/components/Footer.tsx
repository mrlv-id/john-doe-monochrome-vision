const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-gray-500">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="font-body text-sm text-gray-500">
            Urban & Minimalist Photography
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
