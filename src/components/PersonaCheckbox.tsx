import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Info, 
  LayoutGrid, 
  BarChart3, 
  Database, 
  Building, 
  Shield, 
  Box, 
  LineChart, 
  Settings, 
  Users 
} from "lucide-react";

interface PersonaCheckboxProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const getPersonaIcon = (persona: string) => {
  const iconMap = {
    "All": LayoutGrid,
    "Business Analyst": BarChart3,
    "Data Engineer": Database,
    "Data Architect": Building,
    "Data Steward": Shield,
    "Data Modeler": Box,
    "Analytics Engineer": LineChart,
    "Data Operator": Settings,
    "Data Leader": Users
  };
  
  return iconMap[persona as keyof typeof iconMap] || LayoutGrid;
};

export function PersonaCheckbox({ id, label, description, checked, onCheckedChange }: PersonaCheckboxProps) {
  const IconComponent = getPersonaIcon(label);
  
  const handleClick = () => {
    onCheckedChange(!checked);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`
              flex items-center space-x-3 p-4 rounded-xl cursor-pointer transition-all duration-200
              border hover:border-primary/50 hover:shadow-soft
              ${checked 
                ? 'bg-primary/10 border-primary shadow-soft' 
                : 'bg-surface-elevated border-border hover:bg-surface-subtle'
              }
              group hover:scale-105
            `}
            onClick={handleClick}
          >
            <Checkbox
              id={id}
              checked={checked}
              onCheckedChange={onCheckedChange}
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <div className="flex items-center gap-2 flex-1">
              <IconComponent 
                className={`h-4 w-4 transition-colors ${
                  checked ? 'text-primary' : 'text-on-card-secondary'
                }`} 
              />
              <label
                htmlFor={id}
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  checked ? 'text-on-card font-semibold' : 'text-on-card'
                }`}
              >
                {label}
              </label>
            </div>
            <Info className="h-3 w-3 text-on-card-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}