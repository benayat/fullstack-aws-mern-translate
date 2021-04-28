const AWS = require("aws-sdk");

// AWS.config.update({
// region:
// accessKeyId:
// secretAccessKey:
// })
const translate = new AWS.Translate();
const params = {
  SourceLanguageCode: "he",
  TargetLanguageCode: "en",
  Text: "הבית שלי גדול מאד",
};
const translateText = async (originalText, targetLanguageCode) => {
  return new Promise((resolve, reject) => {
    let params = {
      Text: originalText,
      SourceLanguageCode: "auto",
      TargetLanguageCode: targetLanguageCode,
    };

    try {
      translate.translateText(params, (err, data) => {
        if (err) {
          reject(err);
        }

        if (data) resolve(data.TranslatedText);
      });
    } catch (err) {
      console.error(err);
    }
  });
};

const tran = async () => {
  const data = await translateText("מדריך המפלצות של לולי", "en");
  console.log(data);
};
tran();
