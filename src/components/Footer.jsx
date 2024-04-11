function Footer() {
  return (
    <div className="dark:bg-primary dark:text-gray-300 flex justify-center p-2 font-semibold text-sm md:text-lg">
      <p>&copy; {new Date().getFullYear()} Codes by Felix. All rights reserved.</p>
    </div>
  );
}

export default Footer;
