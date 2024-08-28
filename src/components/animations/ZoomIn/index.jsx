function ZoomIn(children, duration) {
  return (
    <div data-aos="zoom-in" data-aos-duration={duration}>
      {children}
    </div>
  );
}

export default ZoomIn;
