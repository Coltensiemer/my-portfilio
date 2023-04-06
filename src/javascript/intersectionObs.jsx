


// const  useElementOnScreen = (options) => {
// 	const containerRef = React.useRef(null);
  
// 	const [IsVisible, setIsVisible] = React.useState(false);
  
// 	const callback = (e) => {
// 	  const [entry] = e;
// 	  setIsVisible(entry.isIntersecting);
// 	};
  

  
// 	React.useEffect(() => {
// 	  const observer = new IntersectionObserver(callback, options);
// 	  if (containerRef.current) observer.observe(containerRef.current);
  
// 	  return () => {
// 		if (containerRef.current) observer.unobserve(containerRef.current);
// 	  };
// 	}, [containerRef, options]);
  
// 	return [containerRef, IsVisible];
//   };

//   export default useElementOnScreen; 