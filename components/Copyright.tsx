import React from "react";

const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section>
      <footer className="text-center py-6 bg-transparent text-white mt-20">
        <p>
          &copy; {currentYear}{" "}
          <a
            href="https://saikat.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            saikat.in
          </a>{" "}
          All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Copyright;
