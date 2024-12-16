export interface Equipment {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  specs: string[];
  features: string[];
  applications: string[];
  history: string;
  technicalDetails: {
    dimensions: {
      length: string;
      width: string;
      height: string;
    };
    capacity: string;
    specialFeatures: string[];
  };
}