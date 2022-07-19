const CodeText: React.FC<{ children: string }> = ({ children }) => {
  return <code className="bg-[#C2B4FC] rounded p-[2px]">{children}</code>;
};

export default CodeText;
