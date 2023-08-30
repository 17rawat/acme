const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} acme. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
