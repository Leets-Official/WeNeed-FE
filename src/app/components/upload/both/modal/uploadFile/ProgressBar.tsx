import { Progress } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value + 25);
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="w-[50px]">
      <Progress
        aria-label="Downloading..."
        size="sm"
        value={value}
        color="default"
        showValueLabel={false}
        classNames={{
          indicator: 'bg-gradient-to-r from-black to-black',
          value: 'text-foreground/60',
        }}
      />
    </div>
  );
}
