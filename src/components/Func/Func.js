const priorityMap = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority',
};

export function groupAndSortDataByUserPriority(usersData, ticketsData) {
  const groupedAndSortedData = {};

  ticketsData.forEach(ticket => {
    const { userId, priority } = ticket;
    const priorityName = priorityMap[priority];

    if (!groupedAndSortedData[userId]) {
      const user = usersData.find(userData => userData.id === userId);
      if (user) {
        groupedAndSortedData[userId] = {
          userName: user.name,
          availability: user.available,
          groups: {},
        };
      }
    }

    if (!groupedAndSortedData[userId].groups[priorityName]) {
      groupedAndSortedData[userId].groups[priorityName] = [];
    }

    groupedAndSortedData[userId].groups[priorityName].push(ticket);
  });

  // Sort tasks within each group by priority in descending order
  for (const userId in groupedAndSortedData) {
    for (const priority in groupedAndSortedData[userId].groups) {
      groupedAndSortedData[userId].groups[priority].sort(
        (taskA, taskB) => taskB.priority - taskA.priority
      );
    }
  }

  return groupedAndSortedData;
}

// Other groupBy functions remain the same...


 export  const groupByUserAndTitle = (usersData, ticketsData) => {
    const groupedData = {};
  
    ticketsData.forEach(ticket => {
      const userId = ticket.userId;
      const title = ticket.title;
      const user = usersData[userId];
  
      if (!groupedData[user.name]) {
        groupedData[user.name] = {
          userName: user.name,
          availability: user.availability,
          groups: {},
        };
      }
  
      if (!groupedData[user.name].groups[title]) {
        groupedData[user.name].groups[title] = [];
      }
  
      const taskWithUser = { ...ticket, user };
      groupedData[user.name].groups[title].push(taskWithUser);
    });
  
    return groupedData;
  };
  

  export const groupByPriorityAndTitle = (usersData, ticketsData) => {
    const groupedData = {};
  
    ticketsData.forEach(ticket => {
      const priority = ticket.priority;
      const title = ticket.title;
      const priorityDescription = priorityMap[priority];
  
      if (!groupedData[priorityDescription]) {
        groupedData[priorityDescription] = {
          groups: {},
        };
      }
  
      if (!groupedData[priorityDescription].groups[title]) {
        groupedData[priorityDescription].groups[title] = [];
      }
  
      const user = usersData[ticket.userId];
      const taskWithUser = { ...ticket, user };
      groupedData[priorityDescription].groups[title].push(taskWithUser);
    });
  
    return groupedData;
  };
  
  export const groupByPriorityAndPriority = (usersData, ticketsData) => {
    const groupedData = {};
  
    ticketsData.forEach(ticket => {
      const priority = ticket.priority;
      const priorityDescription = priorityMap[priority];
  
      if (!groupedData[priorityDescription]) {
        groupedData[priorityDescription] = {
          groups: {},
        };
      }
  
      if (!groupedData[priorityDescription].groups[priorityDescription]) {
        groupedData[priorityDescription].groups[priorityDescription] = [];
      }
  
      const user = usersData[ticket.userId];
      const taskWithUser = { ...ticket, user };
      groupedData[priorityDescription].groups[priorityDescription].push(taskWithUser);
    });
  
    return groupedData;
  };
  

  export const groupByStatusAndPriority = (usersData, ticketsData) => {
    const groupedData = {};
  
    ticketsData.forEach(ticket => {
      const status = ticket.status;
      const priority = ticket.priority;
      const priorityDescription = priorityMap[priority];
  
      if (!groupedData[status]) {
        groupedData[status] = {
          groups: {},
        };
      }
  
      if (!groupedData[status].groups[priorityDescription]) {
        groupedData[status].groups[priorityDescription] = [];
      }
  
      const user = usersData[ticket.userId];
      const taskWithUser = { ...ticket, user };
      groupedData[status].groups[priorityDescription].push(taskWithUser);
    });
  
    return groupedData;
  };
  

  export const groupByStatusAndTitle = (usersData, ticketsData) => {
    const groupedData = {};
  
    ticketsData.forEach(ticket => {
      const status = ticket.status;
      const title = ticket.title;
  
      if (!groupedData[status]) {
        groupedData[status] = {
          groups: {},
        };
      }
  
      if (!groupedData[status].groups[title]) {
        groupedData[status].groups[title] = [];
      }
  
      const user = usersData[ticket.userId];
      const taskWithUser = { ...ticket, user };
      groupedData[status].groups[title].push(taskWithUser);
    });
  
    return groupedData;
  };
  