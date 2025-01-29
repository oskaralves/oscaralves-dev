type LogotypeProps = {
  width?: string;
  height?: string;
};

export function Logotype({ width = '144', height = '68' }: LogotypeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 144 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68Z"
        fill="#C12954"
      />
      <path d="M144 66H68L106.125 2L144 66Z" fill="#C12954" />
    </svg>
  );
}
