var documenterSearchIndex = {"docs":
[{"location":"history/#What's-new?","page":"Version history","title":"What's new?","text":"","category":"section"},{"location":"history/#What's-new-in-v2.7","page":"Version history","title":"What's new in v2.7","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"Potential reduction of memory allocations in multiplication of   LinearCombinations, BlockMaps, and real- or complex-scaled LinearMaps.   For the latter, a new internal type ScaledMap has been introduced.\nMultiplication code for CompositeMaps has been refactored to facilitate to   provide memory for storage of intermediate results by directly calling helper   functions.","category":"page"},{"location":"history/#What's-new-in-v2.6","page":"Version history","title":"What's new in v2.6","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"New feature: \"lazy\" Kronecker product, Kronecker sums, and powers thereof   for LinearMaps. AbstractMatrix objects are promoted to LinearMaps if   one of the first 8 Kronecker factors is a LinearMap object.\nCompatibility with the generic multiply-and-add interface (a.k.a. 5-arg   mul!) introduced in julia v1.3","category":"page"},{"location":"history/#What's-new-in-v2.5","page":"Version history","title":"What's new in v2.5","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"New feature: concatenation of LinearMaps objects with UniformScalings,   consistent with (h-, v-, and hc-)concatenation of matrices. Note, matrices   A must be wrapped as LinearMap(A), UniformScalings are promoted to   LinearMaps automatically.","category":"page"},{"location":"history/#What's-new-in-v2.4","page":"Version history","title":"What's new in v2.4","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"Support restricted to Julia v1.0+.","category":"page"},{"location":"history/#What's-new-in-v2.3","page":"Version history","title":"What's new in v2.3","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"Fully Julia v0.7/v1.0/v1.1 compatible.\nFull support of noncommutative number types such as quaternions.","category":"page"},{"location":"history/#What's-new-in-v2.2","page":"Version history","title":"What's new in v2.2","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"Fully Julia v0.7/v1.0 compatible.\nA convert(SparseMatrixCSC, A::LinearMap) function, that calls the sparse   matrix generating function.","category":"page"},{"location":"history/#What's-new-in-v2.1","page":"Version history","title":"What's new in v2.1","text":"","category":"section"},{"location":"history/","page":"Version history","title":"Version history","text":"Fully Julia v0.7 compatible; dropped compatibility for previous versions of   Julia from LinearMaps.jl v2.0.0 on.\nA 5-argument version for mul!(y, A::LinearMap, x, α=1, β=0), which   computes y := α * A * x + β * y and implements the usual 3-argument   mul!(y, A, x) for the default α and β.\nSynonymous convert(Matrix, A::LinearMap) and convert(Array, A::LinearMap)   functions, that call the Matrix constructor and return the matrix   representation of A.\nMultiplication with matrices, interpreted as a block row vector of vectors:\nmul!(Y::AbstractArray, A::LinearMap, X::AbstractArray, α=1, β=0): applies A to each column of X and stores the result in-place in the corresponding column of Y;\nfor the out-of-place multiplication, the approach is to compute convert(Matrix, A * X); this is equivalent to applying A to each column of X. In generic code which handles both A::AbstractMatrix and A::LinearMap, the additional call to convert is a noop when A is a matrix.\nFull compatibility with Arpack.jl's   eigs and svds; previously only eigs was working. For more, nicely   collaborating packages see the Example section.","category":"page"},{"location":"related/#Related-open-source-packages","page":"Related packages","title":"Related open-source packages","text":"","category":"section"},{"location":"related/","page":"Related packages","title":"Related packages","text":"The following open-source packages provide similar or even extended functionality as LinearMaps.jl.","category":"page"},{"location":"related/","page":"Related packages","title":"Related packages","text":"Spot: A linear-operator toolbox for Matlab,   which seems to have heavily inspired the Julia package   LinearOperators.jl   and the Python package PyLops\nfastmat: fast linear transforms in Python\nFunctionOperators.jl   and LinearMapsAA.jl   also support mappings between Arrays, inspired by the fatrix object type in the   Matlab version of the Michigan Image Reconstruction Toolbox (MIRT).","category":"page"},{"location":"related/","page":"Related packages","title":"Related packages","text":"As for lazy array manipulation (like addition, composition, Kronecker products and concatenation), there exist further related packages in the Julia ecosystem:","category":"page"},{"location":"related/","page":"Related packages","title":"Related packages","text":"LazyArrays.jl\nBlockArrays.jl\nBlockDiagonals.jl\nKronecker.jl\nFillArrays.jl","category":"page"},{"location":"related/","page":"Related packages","title":"Related packages","text":"Since these packages provide types that are subtypes of Julia Base's AbstractMatrix type, objects of those types can be wrapped by a LinearMap and freely mixed with, for instance, function-based linear maps. The same applies to custom matrix types as provided, for instance, by packages maintained by the JuliaArrays github organization. For any CustomMatrix{T} <: AbstractMatrix{T} type, you only need to provide a mul!(::AbstractVecOrMat, ::CustomMatrix, ::AbstractVector[, ::Number, ::Number]) method for seamless integration with LinearMaps.jl.","category":"page"},{"location":"custom/#Defining-custom-LinearMap-types","page":"Custom maps","title":"Defining custom LinearMap types","text":"","category":"section"},{"location":"custom/","page":"Custom maps","title":"Custom maps","text":"TBD","category":"page"},{"location":"#LinearMaps.jl","page":"Home","title":"LinearMaps.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A Julia package for defining and working with linear maps, also known as linear transformations or linear operators acting on vectors. The only requirement for a LinearMap is that it can act on a vector (by multiplication) efficiently.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"LinearMaps.jl is a registered package and can be installed via","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add LinearMaps","category":"page"},{"location":"","page":"Home","title":"Home","text":"in package mode, to be entered by typing ] in the Julia REPL.","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Let","category":"page"},{"location":"","page":"Home","title":"Home","text":"A = LinearMap(rand(10, 10))\nB = LinearMap(cumsum, reverse∘cumsum∘reverse, 10)","category":"page"},{"location":"","page":"Home","title":"Home","text":"be a matrix- and function-based linear map, respectively. Then the following code just works, indistinguishably from the case when A and B are both AbstractMatrix-typed objects.","category":"page"},{"location":"","page":"Home","title":"Home","text":"3.0A + 2B\nA*B'\n[A B; B A]\nkron(A, B)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The LinearMap type and corresponding methods combine well with the following packages:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Arpack.jl: iterative eigensolver eigs and SVD svds;\nIterativeSolvers.jl: iterative solvers, eigensolvers, and SVD;\nKrylovKit.jl: Krylov-based algorithms for linear problems, singular value and eigenvalue problems\nTSVD.jl: truncated SVD tsvd.","category":"page"},{"location":"","page":"Home","title":"Home","text":"using LinearMaps\nimport Arpack, IterativeSolvers, KrylovKit, TSVD\n\n# Example 1, 1-dimensional Laplacian with periodic boundary conditions\nfunction leftdiff!(y::AbstractVector, x::AbstractVector) # left difference assuming periodic boundary conditions\n    N = length(x)\n    length(y) == N || throw(DimensionMismatch())\n    @inbounds for i=1:N\n        y[i] = x[i] - x[mod1(i-1, N)]\n    end\n    return y\nend\n\nfunction mrightdiff!(y::AbstractVector, x::AbstractVector) # minus right difference\n    N = length(x)\n    length(y) == N || throw(DimensionMismatch())\n    @inbounds for i=1:N\n        y[i] = x[i] - x[mod1(i+1, N)]\n    end\n    return y\nend\n\nD = LinearMap(leftdiff!, mrightdiff!, 100; ismutating=true) # by default has eltype(D) = Float64\n\nArpack.eigs(D'D; nev=3, which=:SR) # note that D'D is recognized as symmetric => real eigenfact\nArpack.svds(D; nsv=3)\n\nΣ, L = IterativeSolvers.svdl(D; nsv=3)\n\nTSVD.tsvd(D, 3)\n\n# Example 2, 1-dimensional Laplacian\nA = LinearMap(100; issymmetric=true, ismutating=true) do C, B\n    C[1] = -2B[1] + B[2]\n    for i in 2:length(B)-1\n        C[i] = B[i-1] - 2B[i] + B[i+1]\n    end\n    C[end] = B[end-1] - 2B[end]\n    return C\nend\n\nArpack.eigs(-A; nev=3, which=:SR)\n\n# Example 3, 2-dimensional Laplacian\nΔ = kronsum(A, A)\n\nArpack.eigs(Δ; nev=3, which=:LR)\nKrylovKit.eigsolve(Δ, size(Δ, 1), 3, :LR)","category":"page"},{"location":"#Philosophy","page":"Home","title":"Philosophy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Several iterative linear algebra methods such as linear solvers or eigensolvers only require an efficient evaluation of the matrix-vector product, where the concept of a matrix can be formalized / generalized to a linear map (or linear operator in the special case of a square matrix).","category":"page"},{"location":"","page":"Home","title":"Home","text":"The LinearMaps package provides the following functionality:","category":"page"},{"location":"","page":"Home","title":"Home","text":"A LinearMap type that shares with the AbstractMatrix type that it  responds to the functions size, eltype, isreal, issymmetric,  ishermitian and isposdef, transpose and adjoint and multiplication  with a vector using both * or the in-place version mul!. Linear algebra  functions that use duck-typing for their arguments can handle LinearMap  objects similar to AbstractMatrix objects, provided that they can be  written using the above methods. Unlike AbstractMatrix types, LinearMap  objects cannot be indexed, neither using getindex or setindex!.\nA single function LinearMap that acts as a general purpose  constructor (though it is only an abstract type) and allows to construct  linear map objects from functions, or to wrap objects of type  AbstractMatrix or LinearMap. The latter functionality is useful to  (re)define the properties (isreal, issymmetric, ishermitian,  isposdef) of the existing matrix or linear map.\nA framework for combining objects of type LinearMap and of type  AbstractMatrix using linear combinations, transposition, composition,  concatenation and Kronecker product/sums,  where the linear map resulting from these operations is never explicitly  evaluated but only its matrix-vector product is defined (i.e. lazy  evaluation). The matrix-vector product is written to minimize memory  allocation by using a minimal number of temporary vectors. There is full  support for the in-place version mul!, which should be preferred for  higher efficiency in critical algorithms. In addition, it tries to recognize  the properties of combinations of linear maps. In particular, compositions  such as A'*A for arbitrary A or even A'*B*C*B'*A with arbitrary A  and B and positive definite C are recognized as being positive definite  and hermitian. In case a certain property of the resulting LinearMap  object is not correctly inferred, the LinearMap method can be called to  redefine the properties.","category":"page"},{"location":"types/#Types-and-methods","page":"Types and methods","title":"Types and methods","text":"","category":"section"},{"location":"types/#Types-and-their-constructors","page":"Types and methods","title":"Types and their constructors","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"None of the types below need to be constructed directly; they arise from performing operations between LinearMap objects or by calling the LinearMap constructor described next.","category":"page"},{"location":"types/#LinearMap","page":"Types and methods","title":"LinearMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Abstract supertype","category":"page"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"LinearMaps.LinearMap","category":"page"},{"location":"types/#LinearMaps.LinearMap","page":"Types and methods","title":"LinearMaps.LinearMap","text":"LinearMap(A::LinearMap; kwargs...)::WrappedMap\nLinearMap(A::AbstractMatrix; kwargs...)::WrappedMap\nLinearMap(J::UniformScaling, M::Int)::UniformScalingMap\nLinearMap{T=Float64}(f, [fc,], M::Int, N::Int = M; kwargs...)::FunctionMap\n\nConstruct a linear map object, either from an existing LinearMap or AbstractMatrix A, with the purpose of redefining its properties via the keyword arguments kwargs; a UniformScaling object J with specified (square) dimension M; or from a function or callable object f. In the latter case, one also needs to specify the size of the equivalent matrix representation (M, N), i.e., for functions f acting on length N vectors and producing length M vectors (with default value N=M). Preferably, also the eltype T of the corresponding matrix representation needs to be specified, i.e. whether the action of f on a vector will be similar to, e.g., multiplying by numbers of type T. If not specified, the devault value T=Float64 will be assumed. Optionally, a corresponding function fc can be specified that implements the adjoint (=transpose in the real case) of f.\n\nThe keyword arguments and their default values for the function-based constructor are:\n\nissymmetric::Bool = false : whether A or f acts as a symmetric matrix\nishermitian::Bool = issymmetric & T<:Real : whether A or f acts as a Hermitian matrix\nisposdef::Bool = false : whether A or f acts as a positive definite matrix.\n\nFor existing linear maps or matrices A, the default values will be taken by calling issymmetric, ishermitian and isposdef on the existing object A.\n\nFor the function-based constructor, there is one more keyword argument:\n\nismutating::Bool : flags whether the function acts as a mutating matrix multiplication   f(y,x) where the result vector y is the first argument (in case of true),   or as a normal matrix multiplication that is called as y=f(x) (in case of false).   The default value is guessed by looking at the number of arguments of the first occurrence   of f in the method table.\n\n\n\n\n\n","category":"type"},{"location":"types/#FunctionMap","page":"Types and methods","title":"FunctionMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Type for wrapping an arbitrary function that is supposed to implement the matrix-vector product as a LinearMap; see above.","category":"page"},{"location":"types/#WrappedMap","page":"Types and methods","title":"WrappedMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Type for wrapping an AbstractMatrix or LinearMap and to possible redefine the properties isreal, issymmetric, ishermitian and isposdef. An AbstractMatrix will automatically be converted to a WrappedMap when it is combined with other LinearMap objects via linear combination or composition (multiplication). Note that WrappedMap(mat1)*WrappedMap(mat2) will never evaluate mat1*mat2, since this is more costly than evaluating mat1*(mat2*x) and the latter is the only operation that needs to be performed by LinearMap objects anyway. While the cost of matrix addition is comparable to matrix-vector multiplication, this too is not performed explicitly since this would require new storage of the same amount as of the original matrices.","category":"page"},{"location":"types/#ScaledMap","page":"Types and methods","title":"ScaledMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Type for representing a scalar multiple of any LinearMap type. A ScaledMap will be automatically constructed if real or complex LinearMap objects are multiplied by real or complex scalars from the left or from the right.","category":"page"},{"location":"types/#UniformScalingMap","page":"Types and methods","title":"UniformScalingMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Type for representing a scalar multiple of the identity map (a.k.a. uniform scaling) of a certain size M=N, obtained simply as LinearMap(λI, M), where I is the LinearAlgreba.UniformScaling object. The type T of the resulting LinearMap object is inferred from the type of λ. A UniformScalingMap of the correct size will be automatically constructed if LinearMap objects are multiplied by scalars from the left or from the right (respecting the order of multiplication), if the scalar λ is either real or complex.","category":"page"},{"location":"types/#LinearCombination,-CompositeMap,-TransposeMap-and-AdjointMap","page":"Types and methods","title":"LinearCombination, CompositeMap, TransposeMap and AdjointMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Used to add/multiply/transpose/adjoint LinearMap objects lazily, don't need to be constructed explicitly.","category":"page"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"+(::LinearMap,::LinearMap)\n*(::LinearMap,::LinearMap)\nLinearAlgebra.transpose(::LinearMap)\nLinearAlgebra.adjoint(::LinearMap)","category":"page"},{"location":"types/#Base.:+-Tuple{LinearMap,LinearMap}","page":"Types and methods","title":"Base.:+","text":"+(A::LinearMap, B::LinearMap)::LinearCombination\n\nConstruct a (lazy) representation of the sum/linear combination of the two operators. Sums of LinearMap/LinearCombination objects and LinearMap/LinearCombination objects are reduced to a single LinearCombination. In sums of LinearMaps and AbstractMatrix/UniformScaling objects, the latter get promoted to LinearMaps automatically.\n\nExamples\n\njulia> CS = LinearMap{Int}(cumsum, 3)::LinearMaps.FunctionMap;\n\njulia> LinearMap(ones(Int, 3, 3)) + CS + I + rand(3, 3);\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.:*-Tuple{LinearMap,LinearMap}","page":"Types and methods","title":"Base.:*","text":"*(A::LinearMap, B::LinearMap)::CompositeMap\n\nConstruct a (lazy) representation of the product of the two operators. Products of LinearMap/CompositeMap objects and LinearMap/CompositeMap objects are reduced to a single CompositeMap. In products of LinearMaps and AbstractMatrix/UniformScaling objects, the latter get promoted to LinearMaps automatically.\n\nExamples\n\njulia> CS = LinearMap{Int}(cumsum, 3)::LinearMaps.FunctionMap;\n\njulia> LinearMap(ones(Int, 3, 3)) * CS * I * rand(3, 3);\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.transpose-Tuple{LinearMap}","page":"Types and methods","title":"Base.transpose","text":"transpose(A::LinearMap)\n\nConstruct a lazy representation of the transpose of A. This can be either a TransposeMap wrapper of A, or a suitably redefined instance of the same type as A. For instance, for a linear combination of linear maps A + B, the transpose is given by A^ + B^, i.e., another linear combination of linear maps.\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.adjoint-Tuple{LinearMap}","page":"Types and methods","title":"Base.adjoint","text":"adjoint(A::LinearMap)\n\nConstruct a lazy representation of the adjoint of A. This can be either a AdjointMap wrapper of A, or a suitably redefined instance of the same type as A. For instance, for a linear combination of linear maps A + B, the adjoint is given by A^* + B^*, i.e., another linear combination of linear maps.\n\n\n\n\n\n","category":"method"},{"location":"types/#KroneckerMap-and-KroneckerSumMap","page":"Types and methods","title":"KroneckerMap and KroneckerSumMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Types for representing Kronecker products and Kronecker sums, resp., lazily.","category":"page"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Base.kron(::LinearMap,::LinearMap)\nLinearMaps.:⊗\nkronsum\nLinearMaps.:⊕","category":"page"},{"location":"types/#Base.kron-Tuple{LinearMap,LinearMap}","page":"Types and methods","title":"Base.kron","text":"kron(A::LinearMap, B::LinearMap)::KroneckerMap\nkron(A, B, Cs...)::KroneckerMap\n\nConstruct a (lazy) representation of the Kronecker product A⊗B. One of the two factors can be an AbstractMatrix, which is then promoted to a LinearMap automatically.\n\nTo avoid fallback to the generic Base.kron in the multi-map case, there must be a LinearMap object among the first 8 arguments in usage like kron(A, B, Cs...).\n\nFor convenience, one can also use A ⊗ B or ⊗(A, B, Cs...) (typed as \\otimes+TAB) to construct the KroneckerMap, even when all arguments are of AbstractMatrix type.\n\nIf A, B, C and D are linear maps of such size that one can form the matrix products A*C and B*D, then the mixed-product property (A⊗B)*(C⊗D) = (A*C)⊗(B*D) holds. Upon vector multiplication, this rule is checked for applicability.\n\nExamples\n\njulia> J = LinearMap(I, 2) # 2×2 identity map\nLinearMaps.UniformScalingMap{Bool}(true, 2)\n\njulia> E = spdiagm(-1 => trues(1)); D = E + E' - 2I;\n\njulia> Δ = kron(D, J) + kron(J, D); # discrete 2D-Laplace operator\n\njulia> Matrix(Δ)\n4×4 Array{Int64,2}:\n -4   1   1   0\n  1  -4   0   1\n  1   0  -4   1\n  0   1   1  -4\n\n\n\n\n\n","category":"method"},{"location":"types/#LinearMaps.:⊗","page":"Types and methods","title":"LinearMaps.:⊗","text":"⊗(k::Integer)\n\nConstruct a lazy representation of the k-th Kronecker power A^⊗(k) = A ⊗ A ⊗ ... ⊗ A, where A can be an AbstractMatrix or a LinearMap.\n\n\n\n\n\n","category":"function"},{"location":"types/#LinearMaps.kronsum","page":"Types and methods","title":"LinearMaps.kronsum","text":"kronsum(A, B)::KroneckerSumMap\nkronsum(A, B, Cs...)::KroneckerSumMap\n\nConstruct a (lazy) representation of the Kronecker sum A⊕B = A ⊗ Ib + Ia ⊗ B of two square linear maps of type LinearMap or AbstractMatrix. Here, Ia and Ib are identity operators of the size of A and B, respectively. Arguments of type AbstractMatrix are automatically promoted to LinearMap.\n\nFor convenience, one can also use A ⊕ B or ⊕(A, B, Cs...) (typed as \\oplus+TAB) to construct the KroneckerSumMap.\n\nExamples\n\njulia> J = LinearMap(I, 2) # 2×2 identity map\nLinearMaps.UniformScalingMap{Bool}(true, 2)\n\njulia> E = spdiagm(-1 => trues(1)); D = LinearMap(E + E' - 2I);\n\njulia> Δ₁ = kron(D, J) + kron(J, D); # discrete 2D-Laplace operator, Kronecker sum\n\njulia> Δ₂ = kronsum(D, D);\n\njulia> Δ₃ = D^⊕(2);\n\njulia> Matrix(Δ₁) == Matrix(Δ₂) == Matrix(Δ₃)\ntrue\n\n\n\n\n\n","category":"function"},{"location":"types/#LinearMaps.:⊕","page":"Types and methods","title":"LinearMaps.:⊕","text":"⊕(k::Integer)\n\nConstruct a lazy representation of the k-th Kronecker sum power A^⊕(k) = A ⊕ A ⊕ ... ⊕ A, where A can be a square AbstractMatrix or a LinearMap.\n\n\n\n\n\n","category":"function"},{"location":"types/#BlockMap-and-BlockDiagonalMap","page":"Types and methods","title":"BlockMap and BlockDiagonalMap","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Types for representing block (diagonal) maps lazily.","category":"page"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Base.hcat\nBase.vcat\nBase.hvcat\nBase.cat\nSparseArrays.blockdiag","category":"page"},{"location":"types/#Base.hcat","page":"Types and methods","title":"Base.hcat","text":"hcat(As::Union{LinearMap,UniformScaling}...)::BlockMap\n\nConstruct a (lazy) representation of the horizontal concatenation of the arguments. UniformScaling objects are promoted to LinearMap automatically. To avoid fallback to the generic Base.hcat, there must be a LinearMap object among the first 8 arguments.\n\nExamples\n\njulia> CS = LinearMap{Int}(cumsum, 3)::LinearMaps.FunctionMap;\n\njulia> L = [CS LinearMap(ones(Int, 3, 3))]::LinearMaps.BlockMap;\n\njulia> L * ones(Int, 6)\n3-element Array{Int64,1}:\n 4\n 5\n 6\n\n\n\n\n\n","category":"function"},{"location":"types/#Base.vcat","page":"Types and methods","title":"Base.vcat","text":"vcat(As::Union{LinearMap,UniformScaling}...)::BlockMap\n\nConstruct a (lazy) representation of the vertical concatenation of the arguments. UniformScaling objects are promoted to LinearMap automatically. To avoid fallback to the generic Base.vcat, there must be a LinearMap object among the first 8 arguments.\n\nExamples\n\njulia> CS = LinearMap{Int}(cumsum, 3)::LinearMaps.FunctionMap;\n\njulia> L = [CS; LinearMap(ones(Int, 3, 3))]::LinearMaps.BlockMap;\n\njulia> L * ones(Int, 3)\n6-element Array{Int64,1}:\n 1\n 2\n 3\n 3\n 3\n 3\n\n\n\n\n\n","category":"function"},{"location":"types/#Base.hvcat","page":"Types and methods","title":"Base.hvcat","text":"hvcat(rows::Tuple{Vararg{Int}}, As::Union{LinearMap,UniformScaling}...)::BlockMap\n\nConstruct a (lazy) representation of the horizontal-vertical concatenation of the arguments. The first argument specifies the number of arguments to concatenate in each block row. UniformScaling objects are promoted to LinearMap automatically. To avoid fallback to the generic Base.hvcat, there must be a LinearMap object among the first 8 arguments.\n\nExamples\n\njulia> CS = LinearMap{Int}(cumsum, 3)::LinearMaps.FunctionMap;\n\njulia> L = [CS CS; CS CS]::LinearMaps.BlockMap;\n\njulia> L.rows\n(2, 2)\n\njulia> L * ones(Int, 6)\n6-element Array{Int64,1}:\n 2\n 4\n 6\n 2\n 4\n 6\n\n\n\n\n\n","category":"function"},{"location":"types/#Base.cat","page":"Types and methods","title":"Base.cat","text":"cat(As::Union{LinearMap,AbstractMatrix}...; dims=(1,2))::BlockDiagonalMap\n\nConstruct a (lazy) representation of the diagonal concatenation of the arguments. To avoid fallback to the generic Base.cat, there must be a LinearMap object among the first 8 arguments.\n\n\n\n\n\n","category":"function"},{"location":"types/#SparseArrays.blockdiag","page":"Types and methods","title":"SparseArrays.blockdiag","text":"SparseArrays.blockdiag(As::Union{LinearMap,AbstractMatrix}...)::BlockDiagonalMap\n\nConstruct a (lazy) representation of the diagonal concatenation of the arguments. To avoid fallback to the generic SparseArrays.blockdiag, there must be a LinearMap object among the first 8 arguments.    \n\n\n\n\n\n","category":"function"},{"location":"types/#Methods","page":"Types and methods","title":"Methods","text":"","category":"section"},{"location":"types/#Multiplication-methods","page":"Types and methods","title":"Multiplication methods","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Base.:*(::LinearMap,::AbstractVector)\nBase.:*(::LinearMap,::AbstractMatrix)\nBase.:*(::AbstractMatrix,::LinearMap)\nLinearAlgebra.mul!(::AbstractVector,::LinearMap,::AbstractVector)\nLinearAlgebra.mul!(::AbstractVector,::LinearMap,::AbstractVector,::Number,::Number)\n*(::LinearAlgebra.AdjointAbsVec,::LinearMap)","category":"page"},{"location":"types/#Base.:*-Tuple{LinearMap,AbstractArray{T,1} where T}","page":"Types and methods","title":"Base.:*","text":"*(A::LinearMap, x::AbstractVector)\n\nCompute the action of the linear map A on the vector x.\n\nExamples\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); x=[1.0, 1.0];\n\njulia> A*x\n2-element Array{Float64,1}:\n 3.0\n 7.0\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.:*-Tuple{LinearMap,AbstractArray{T,2} where T}","page":"Types and methods","title":"Base.:*","text":"*(A::LinearMap, X::AbstractMatrix)::CompositeMap\n\nReturn the CompositeMap A*LinearMap(X), interpreting the matrix X as a linear operator, rather than a collection of column vectors. To compute the action of A on each column of X, call Matrix(A*X) or use the in-place multiplication mul!(Y, A, X[, α, β]) with an appropriately sized, preallocated matrix Y.\n\nExamples\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); X=[1.0 1.0; 1.0 1.0];\n\njulia> A*X isa LinearMaps.CompositeMap\ntrue\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.:*-Tuple{AbstractArray{T,2} where T,LinearMap}","page":"Types and methods","title":"Base.:*","text":"*(X::AbstractMatrix, A::LinearMap)::CompositeMap\n\nReturn the CompositeMap LinearMap(X)*A, interpreting the matrix X as a linear operator. To compute the right-action of A on each row of X, call Matrix(X*A).\n\nExamples\n\njulia> X=[1.0 1.0; 1.0 1.0]; A=LinearMap([1.0 2.0; 3.0 4.0]);\n\njulia> X*A isa LinearMaps.CompositeMap\ntrue\n\n\n\n\n\n","category":"method"},{"location":"types/#LinearAlgebra.mul!-Tuple{AbstractArray{T,1} where T,LinearMap,AbstractArray{T,1} where T}","page":"Types and methods","title":"LinearAlgebra.mul!","text":"mul!(Y, A::LinearMap, B) -> Y\n\nCalculates the action of the linear map A on the vector or matrix B and stores the result in Y, overwriting the existing value of Y. Note that Y must not be aliased with either A or B.\n\nExamples\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); B=[1.0, 1.0]; Y = similar(B); mul!(Y, A, B);\n\njulia> Y\n2-element Array{Float64,1}:\n 3.0\n 7.0\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); B=[1.0 1.0; 1.0 1.0]; Y = similar(B); mul!(Y, A, B);\n\njulia> Y\n2×2 Array{Float64,2}:\n 3.0  3.0\n 7.0  7.0\n\n\n\n\n\n","category":"method"},{"location":"types/#LinearAlgebra.mul!-Tuple{AbstractArray{T,1} where T,LinearMap,AbstractArray{T,1} where T,Number,Number}","page":"Types and methods","title":"LinearAlgebra.mul!","text":"mul!(C, A::LinearMap, B, α, β) -> C\n\nCombined inplace multiply-add A B α + C β. The result is stored in C by overwriting it. Note that C must not be aliased with either A or B.\n\nExamples\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); B=[1.0, 1.0]; C=[1.0, 3.0];\n  \njulia> mul!(C, A, B, 100.0, 10.0) === C\ntrue\n  \njulia> C\n2-element Array{Float64,1}:\n 310.0\n 730.0\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); B=[1.0 1.0; 1.0 1.0]; C=[1.0 2.0; 3.0 4.0];\n  \njulia> mul!(C, A, B, 100.0, 10.0) === C\ntrue\n  \njulia> C\n2×2 Array{Float64,2}:\n 310.0  320.0\n 730.0  740.0\n\n\n\n\n\n","category":"method"},{"location":"types/#Base.:*-Tuple{Adjoint{T,var\"#s826\"} where var\"#s826\"<:(AbstractArray{T,1} where T) where T,LinearMap}","page":"Types and methods","title":"Base.:*","text":"*(::LinearAlgebra.AdjointAbsVec, A::LinearMap)\n*(::LinearAlgebra.TransposeAbsVec, A::LinearMap)\n\nCompute the right-action of the linear map A on the adjoint and transpose vector x and return an adjoint and transpose vector, respectively.\n\nExamples\n\njulia> A=LinearMap([1.0 2.0; 3.0 4.0]); x=[1.0, 1.0]; x'A\n1×2 Adjoint{Float64,Array{Float64,1}}:\n 4.0  6.0\n\n\n\n\n\n","category":"method"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Applying the adjoint or transpose of A (if defined) to x works exactly as in the usual matrix case: transpose(A) * x and mul!(y, A', x), for instance.","category":"page"},{"location":"types/#Conversion-methods","page":"Types and methods","title":"Conversion methods","text":"","category":"section"},{"location":"types/","page":"Types and methods","title":"Types and methods","text":"Array, Matrix and associated convert methods\nCreate a dense matrix representation of the LinearMap object, by   multiplying it with the successive basis vectors. This is mostly for testing   purposes or if you want to have the explicit matrix representation of a   linear map for which you only have a function definition (e.g. to be able to   use its transpose or adjoint). This way, one may conveniently make A   act on the columns of a matrix X, instead of interpreting A * X as a   composed linear map: Matrix(A * X). For generic code, that is supposed to   handle both A::AbstractMatrix and A::LinearMap, it is recommended to use   convert(Matrix, A*X).\nconvert(Abstract[Matrix/Array], A::LinearMap)\nCreate an AbstractMatrix representation of the LinearMap. This falls   back to Matrix(A), but avoids explicit construction in case the LinearMap   object is matrix-based.\nSparseArrays.sparse(A::LinearMap) and convert(SparseMatrixCSC, A::LinearMap)\nCreate a sparse matrix representation of the LinearMap object, by   multiplying it with the successive basis vectors. This is mostly for testing   purposes or if you want to have the explicit sparse matrix representation of   a linear map for which you only have a function definition (e.g. to be able   to use its transpose or adjoint).","category":"page"}]
}
