import { useState } from "react";
import { Avater } from "./Avater";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assignee: string;
}
const member = {
  a: 'A',
  b: 'B',
  c: 'C'
}

const generateDummyTasks = ():Task[] => {
  return Array(10000).fill('').map((_, index) => {
    const addedIndex = index + 1;
    return {
      id: addedIndex,
      title: `タスク${addedIndex}`,
      assignee: addedIndex % 3 === 0 ? member.a : addedIndex % 2 === 0 ? member.b : member.c
    }
  })
}

const tasks = generateDummyTasks();

const fillteringAssignee = (assignee: string) => {
  if (assignee === '') return tasks;
  return tasks.filter((task) => task.assignee === assignee);
}

export const Transition = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  const [isShowList, setIsShowList] = useState<boolean>(false);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssignee(assignee);
    setTaskList(fillteringAssignee(assignee));
  }

  return (
    <div>
      <p>Transition</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avater isSelected={selectedAssignee === member.a} onClick={onClickAssignee}>{member.a}</Avater>
        <Avater isSelected={selectedAssignee === member.b} onClick={onClickAssignee}>{member.b}</Avater>
        <Avater isSelected={selectedAssignee === member.c} onClick={onClickAssignee}>{member.c}</Avater>
      </div>
      <br />
      <button onClick={() => onClickAssignee('')}>リセット</button>
      <br />
      <br />
      <button onClick={()=> setIsShowList(!isShowList)}>表示/非表示</button>
      {isShowList && <TaskList taskList={taskList} />}
    </div>
  )
}
