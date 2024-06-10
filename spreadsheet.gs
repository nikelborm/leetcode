function getCurrentDeadline(seed) {
  const topLeftStartingCellOfDeadlines = {
    column: 7,
    row: 2
  };
  const currentCellOfDeadline = SpreadsheetApp.getActiveRange().getCell(1, 1);

  const currentCellOfDeadlinesNormalizedAddress = {
    column: currentCellOfDeadline.getColumn() - topLeftStartingCellOfDeadlines.column,
    row: currentCellOfDeadline.getRow() - topLeftStartingCellOfDeadlines.row
  };
  const currentUserShift = {
    rowsToAdd: Math.floor(currentCellOfDeadlinesNormalizedAddress.column / 2),
    columnsToAdd: 0
  };
  const topLeftStartingCellOfChallengeStarts = {
    column: 25,
    row: 2
  }
  const topLeftStartingCellOfTasksPerDay = {
    column: 26,
    row: 2
  };

  const currentCellOfChallengeStarts =
    SpreadsheetApp.getActiveSheet().getRange(
      topLeftStartingCellOfChallengeStarts.row + currentUserShift.rowsToAdd,
      topLeftStartingCellOfChallengeStarts.column + currentUserShift.columnsToAdd
    );

  const challengeStartedAt = currentCellOfChallengeStarts.getValue();

  const currentCellOfTasksPerDay =
    SpreadsheetApp.getActiveSheet().getRange(
      topLeftStartingCellOfTasksPerDay.row + currentUserShift.rowsToAdd,
      topLeftStartingCellOfTasksPerDay.column + currentUserShift.columnsToAdd
    );

  const tasksPerDayAmount = currentCellOfTasksPerDay.getValue();

  const daysToAddToChallengeStartDate = Math.floor(
    currentCellOfDeadlinesNormalizedAddress.row / tasksPerDayAmount
  );

  const isLastTaskOfDay = currentCellOfDeadlinesNormalizedAddress.row % tasksPerDayAmount === tasksPerDayAmount - 1;

  if(isLastTaskOfDay) {
    return new Date(challengeStartedAt.getTime() + daysToAddToChallengeStartDate * 24 * 60 * 60 * 1000)
  }
}
