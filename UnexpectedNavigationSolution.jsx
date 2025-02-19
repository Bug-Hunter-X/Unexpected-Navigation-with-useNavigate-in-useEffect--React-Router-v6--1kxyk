const UnexpectedNavigationSolution = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home'); // Navigation only happens once on mount
  }, []); // Empty dependency array

  return (
    <div>
      <h1>Navigated to Home (Solution)</h1>
    </div>
  );
};