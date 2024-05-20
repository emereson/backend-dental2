import axios from 'axios';

export const findAll = async (req, res) => {
  try {
    const audio = req.body.audio; // Suponiendo que el audio viene en base64
    const audioBuffer = Buffer.from(audio, 'base64');

    // Configuración de la solicitud a Google Cloud Speech-to-Text
    const request = {
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'es-ES',
      },
      audio: {
        content: audioBuffer.toString('base64'),
      },
    };

    const response = await axios.post(
      `https://speech.googleapis.com/v1/speech:recognize?key=${process.env.GOOGLE_API_KEY}`,
      request
    );

    const transcription = response.data.results
      .map((result) => result.alternatives[0].transcript)
      .join('\n');

    res.json({ transcription });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: error.message });
  }
};
