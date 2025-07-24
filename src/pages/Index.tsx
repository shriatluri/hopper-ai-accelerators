import { useState, useMemo } from "react";
import { AcceleratorCard } from "@/components/AcceleratorCard";
import { PersonaCheckbox } from "@/components/PersonaCheckbox";
import { accelerators, allPersonas, personaDescriptions, personaTooltips } from "@/data/accelerators";
import { useToast } from "@/hooks/use-toast";
import hopperLogo from "@/assets/hopper-logo.png";

const Index = () => {
  const { toast } = useToast();
  const [selectedPersonas, setSelectedPersonas] = useState<string[]>(["All"]);

  // Handle checkbox changes
  const handlePersonaChange = (persona: string, checked: boolean) => {
    if (persona === "All") {
      if (checked) {
        setSelectedPersonas(["All"]);
      } else {
        setSelectedPersonas([]);
      }
    } else {
      let newSelected = [...selectedPersonas];
      
      if (checked) {
        // Remove "All" if it exists and add the specific persona
        newSelected = newSelected.filter(p => p !== "All");
        newSelected.push(persona);
      } else {
        // Remove the persona
        newSelected = newSelected.filter(p => p !== persona);
      }
      
      // If no personas selected, automatically select "All"
      if (newSelected.length === 0) {
        newSelected = ["All"];
      }
      
      setSelectedPersonas(newSelected);
    }
  };

  // Filter accelerators based on selected personas
  const filteredAccelerators = useMemo(() => {
    if (selectedPersonas.includes("All")) {
      return accelerators;
    }
    
    return accelerators.filter(accelerator =>
      accelerator.personas.some(persona => selectedPersonas.includes(persona))
    );
  }, [selectedPersonas]);

  // Generate dynamic description
  const currentDescription = useMemo(() => {
    if (selectedPersonas.includes("All")) {
      return personaDescriptions["All"];
    }
    
    if (selectedPersonas.length === 1) {
      return personaDescriptions[selectedPersonas[0] as keyof typeof personaDescriptions];
    }
    
    return `Hopper provides specialized AI accelerators for ${selectedPersonas.join(", ")}, streamlining workflows across multiple data disciplines.`;
  }, [selectedPersonas]);

  const handleLaunch = (acceleratorTitle: string) => {
    toast({
      title: "Launching Accelerator",
      description: `Opening ${acceleratorTitle}...`,
    });
  };

  // Split personas into rows for layout
  const row1Personas = allPersonas.slice(0, 5);
  const row2Personas = allPersonas.slice(5);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-white shadow-sm">
        <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
        <div className="relative">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center gap-4">
              <img 
                src={hopperLogo} 
                alt="Hopper Logo" 
                className="h-16 w-16 rounded-xl shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">
                  Welcome to Hopper.
                </h1>
                <p className="text-lg text-secondary">
                  AI-Powered Data Accelerators Marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Persona Filter Section */}
        <div className="mb-12">
          <div className="backdrop-blur-glass bg-glass border border-glass rounded-2xl p-8 shadow-glass">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Filter by Your Role
            </h2>
            
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              {row1Personas.map((persona) => (
                <PersonaCheckbox
                  key={persona}
                  id={persona}
                  label={persona}
                  description={personaTooltips[persona as keyof typeof personaTooltips]}
                  checked={selectedPersonas.includes(persona)}
                  onCheckedChange={(checked) => handlePersonaChange(persona, checked)}
                />
              ))}
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {row2Personas.map((persona) => (
                <PersonaCheckbox
                  key={persona}
                  id={persona}
                  label={persona}
                  description={personaTooltips[persona as keyof typeof personaTooltips]}
                  checked={selectedPersonas.includes(persona)}
                  onCheckedChange={(checked) => handlePersonaChange(persona, checked)}
                />
              ))}
            </div>
            
            {/* Dynamic Description */}
            <div className="bg-gradient-secondary bg-opacity-10 rounded-xl p-6 border border-glass">
              <p className="text-secondary leading-relaxed">
                {currentDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Accelerators Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Available Accelerators ({filteredAccelerators.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredAccelerators.map((accelerator) => (
              <AcceleratorCard
                key={accelerator.id}
                title={accelerator.title}
                description={accelerator.description}
                status={accelerator.status}
                personas={accelerator.personas}
                onLaunch={() => handleLaunch(accelerator.title)}
              />
            ))}
          </div>

          {filteredAccelerators.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-secondary">
                No accelerators found for the selected roles. Try selecting different personas.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
