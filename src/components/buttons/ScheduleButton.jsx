import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ScheduleButton = () => {
  return (
    <Link to="/contact">
      <Button className="flex items-center gap-2 px-6 py-3">
        <Phone />
        Schedule a Call
      </Button>
    </Link>
  );
};

export default ScheduleButton;
