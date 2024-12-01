export const getDataGenerationMix = async () => {
    try {
      const response = await fetch('https://api.carbonintensity.org.uk/generation');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.data.generationmix;
    } catch (err) {
      throw new Error('Failed to fetch data');
    }
  }