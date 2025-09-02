import { Header } from "./components/common/Header";
import { castle, cat2, hut, wheel } from "./assets/images";
import { SampleGallery } from "./components/common/SampleGallery";
import { Button } from "./components/common/Button";
import { AppContainer } from "./components/common/styles";

function App() {
  return (
    <AppContainer>
      <Header />
      <SampleGallery images={[castle, cat2, hut, wheel]} />
      <Button type="secondary" text="FULL GALLERY" />
    </AppContainer>
  );
}

export default App;
