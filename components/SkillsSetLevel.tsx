import React from 'react'
import sortBy from 'lodash/sortBy'

type TProps = {
  category: string
  skills: object
  skillsIndex: number
  skillsBarAnimator: number
  skillsLevelBarHelper: Function
}

export const SkillsSetLevel: React.FC<TProps> = ({ ...props }): JSX.Element => {
  return (
    <div>
      {sortBy(Object.entries(props.skills[props.category] || {}), [
        function (o) {
          return o[1]
        },
      ])
        .reverse()
        .map((e) => (
          <div key={e[0]} className="d-flex flex-row align-items-center pr-2">
            <div className="pr-2">{e[0]}</div>
            <div className="progress w-50 ml-auto">
              <div
                className={`progress-bar ${props.skillsLevelBarHelper(
                  'color',
                  +e[1]
                )} progress-bar-striped progress-bar-animated`}
                role="progressbar"
                aria-valuenow={+e[1]}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{
                  width: `${
                    props.skillsBarAnimator >= props.skillsIndex ? e[1] : 0
                  }%`,
                }}
              >
                {props.skillsLevelBarHelper('description', +e[1])}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
