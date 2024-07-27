export default function RoadmapCard() {
    const cardData = [
      {
        quarter: "Q1",
        year: 2019,
        durationMonth: "January - March",
        tasks: [
            { title: "Re-designed the zero-g doggie bags. No more spills!", progress: "64%" },
            { title: "Travel & Relocation Support", progress: "12%" },
        ],
      },
      {
        quarter: "Q2",
        year: 2019,
        durationMonth: "April - June",
        tasks: [
          
        ],
      },
      {
        quarter: "Q3",
        year: 2019,
        durationMonth: "July - September",
        tasks: [
            { title: "Bundle interplanetary analytics for improved transmission", progress: "90%" },
        ],
      },
      {
        quarter: "Q4",
        year: 2019,
        durationMonth: "October - December",
        tasks: [
            { title: "Data Migration: Performance & Culture End Game", progress: "63%" },
        ],
      },
    ];

    return (
        <>
            <div className="card-container">
                {cardData.map((card, index) => (
                    <div key={index} className="card-base">
                        <p className="font-xs weight-400 h-20 color-2">{card.quarter} {card.year}</p>
                        <p className="font-sm weight-600 h-20 mb-1 color-2">{card.durationMonth}</p>
                        {card.tasks.length > 0 ? (
                            card.tasks.map((task, idx) => (
                                <div key={idx} className="card-inner mb-1">
                                    <h6 className="mb-2 color-1">{task.title}</h6>
                                    <div className="progress-container">
                                        <img src="./icon/weight.svg" className="weight-icon"/>
                                        <p className="font-xs weight-400 height-16 color-2">{task.progress}</p>
                                        <a href="#" className="more-icon">
                                            <img src="./icon/more.svg"/>
                                        </a>
                                    </div>
                                </div>
                            )
                        )): (
                            <p className="font-sm weight-400 h-24 color-3 mb-1">No Task Available</p>
                        )}
                        <a href="" className="new-task-container">
                            <img src="./icon/plus.svg" className="plus-icon"/>
                            <p className="font-sm weight-400 h-20 color-1">Create new task</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}