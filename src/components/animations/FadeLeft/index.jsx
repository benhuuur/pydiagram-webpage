function FadeLeft(children, duration) {
  return (
    <div data-aos="fade-left" data-aos-duration={duration}>
      {children}
    </div>
  );
}

export default FadeLeft;
