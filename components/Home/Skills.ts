const skills: Array<{ title: string, percent: number }> = [
    {
        title: 'Research Strategy',
        percent: 80
    },
    {
        title: 'Direct Marketing',
        percent: 70
    }
];

export const Skills = (): string => {
    return skills.map(skill => {
        return `<div class="mb-5">
<div class="flex justify-between">
<span class="text-[#0C121D] font-bold leading-9">
${skill.title}
</span>
<span class="text-[#0C121D] font-bold">
${skill.percent}%
</span>
</div>
<div>
    <div class="flex w-full h-2 bg-[#ECECF0] rounded-full overflow-hidden" role="progressbar" aria-valuenow="${skill.percent}" aria-valuemin="0" aria-valuemax="100">
      <div class="flex flex-col justify-center rounded-full overflow-hidden bg-[#0AADEB] text-xs text-white text-center whitespace-nowrap transition duration-500" style="width: ${skill.percent}%"></div>
    </div>
  </div>
</div>`;
    }).join('')
}