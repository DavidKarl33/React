function Logo({ img, alt, className }) {
  return (
    <div>
      <img src={img} alt={alt} className={className} />
    </div>
  );
}

export default Logo;