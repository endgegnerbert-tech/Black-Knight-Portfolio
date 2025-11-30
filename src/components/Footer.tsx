export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        {/* Copyright */}
        <div className="text-center mb-6">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Black Knight Portfolio. Alle Rechte vorbehalten.
          </p>
        </div>
        
        {/* Social Links oder Contact */}
        <div className="text-center text-gray-400 text-sm">
          <p>Made with ❤️ by Einar</p>
        </div>
      </div>
    </footer>
  );
}