import { useEffect, useState } from 'react';
import { List } from './styles';

import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import PrimaryHeader from '../../components/PrimaryHeader';
import ArtifactData from '../../components/ArtifactData';
import CategoryCard from '../../components/CategoryCard';
import PageContainer from '../../components/PageContainer';

import { useAuth } from '../../context/auth';
import { UserCategory } from '../../utils/types';
import categoryService from '../../services/categoryService';

const Categories = () => {
  const [categories, setCategories] = useState<UserCategory[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    const fetchAllCategories = async () => {
      const response = await categoryService.categoryAll(user?._id!);

      setCategories(response.reverse());
    };

    fetchAllCategories();
  }, [user?._id]);

  return (
    <PageContainer>
      <PrimaryHeader title="Categorias" goTo="/categories/create" />

      <ToastContainer />

      <ArtifactData
        title="Categorias"
        subTitle="totais"
        value={categories.length.toString()}
      />

      <List>
        {categories.map((category) => (
          <Link
            key={category._id}
            className="categories-link"
            to={`categories/${category._id}`}
          >
            <CategoryCard name={category.name!} color={category.color!} />
          </Link>
        ))}
      </List>
    </PageContainer>
  );
};

export default Categories;
