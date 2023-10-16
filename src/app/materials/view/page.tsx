import PdfViewer from "./PdfViewer";

const ViewMaterial = () => {
  const url =
    "https://bpb-eu-w2.wpmucdn.com/sites.aub.edu.lb/dist/c/13/files/2019/06/the-basics-of-ux-design.pdf";
  return <PdfViewer url={url} />;
};

export default ViewMaterial;
