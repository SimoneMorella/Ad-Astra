import Select, { SingleValue } from 'react-select';
import { FilterProps, DateOptionsType, SuccessOptionsType } from '../types/filterTypes';

export default function FilterSelect({ options, filter, setFilter } : FilterProps) {

    return (
        <Select
            options={options}
            value={options.find(opt => opt.value === filter)}
            onChange={(choice : SingleValue<DateOptionsType | SuccessOptionsType>) => {
                const value = choice ? choice.label: '';
                setFilter(value)
            }
               }
            className="text-sm font-montserrat w-[200px]"
            placeholder={`Filter by ${options.length > 2 ? 'Year' : 'Status'}`}
            isSearchable={false}
            styles={{
                control: (provided) => ({
                    ...provided,
                    borderRadius: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    boxShadow: 'none',
                    height: '30px',
                    minHeight: '30px',
                }),
                valueContainer: (provided) => ({
                    ...provided,
                    margin: '0px',
                    padding: '0px 4px'
                }),
                indicatorsContainer: (provided) => ({
                    ...provided,
                    height: '30px',
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'white'
                })



            }}
        />
    )
}