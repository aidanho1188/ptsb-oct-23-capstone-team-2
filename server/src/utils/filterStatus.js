//'Status has been changed from <b>IN PROGRESS/ON SITE</b> to <b>IN PROGRESS/INCOMPLETE</b>.'
// return IN PROGRESS/ON SITE and IN PROGRESS/INCOMPLETE

function filterStatus(str) {
  const words = str.split('</b> to <b>')
  const prevStatus = words[0].split('<b>')
  const newStatus = words[1].split('</b>')
  const status = [prevStatus[1], newStatus[0]]
  return status
}

module.exports = filterStatus
