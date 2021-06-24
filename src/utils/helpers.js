const moment = require("moment");

module.exports = {
  formatIgdbUrl: (url) => {
    if (url) {
      return (url = url.replace("thumb", "1080p"));
    }
  },
  formatRatings: (rating) => {
    if (rating) {
      return rating.toFixed(2);
    }
  },
  formattedDate: (date) => {
    if (date) {
      date = date * 1000;
      return moment(date).format("DD/MM/YYYY");
    }
  },
  checkIfAchievement: (achievement) => {
    if (achievement === 1) {
      return true;
    } else if (achievement === 0) {
      return false;
    }
  },
  changeUnderscoreToSpace: (achievement) => {
    if (achievement) {
      return achievement.split("_").join(" ");
    }
  },

  trimSummary: (summary) => {
    if (summary) {
      let newSummary = summary.slice(0, 512);
      newSummary = newSummary + "[...]";
      return newSummary;
    }
  },

  checkIfData: (data) => {
    if (!data) {
      return (data = false);
    }
  },
};
