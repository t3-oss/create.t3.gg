const ImageLink: React.FC<{
  src: string;
  alt: string;
  href: string;
  title: string;
}> = ({ src, alt, href, title }) => {
  return (
    <a
      href={href}
      title={title}
      className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
    >
      <img className="max-h-[75px]" src={src} alt={alt} />
    </a>
  );
};

export default ImageLink;
